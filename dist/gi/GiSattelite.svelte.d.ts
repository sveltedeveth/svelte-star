import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type GiSatteliteProps = typeof __propDef.props;
export type GiSatteliteEvents = typeof __propDef.events;
export type GiSatteliteSlots = typeof __propDef.slots;
export default class GiSattelite extends SvelteComponentTyped<GiSatteliteProps, GiSatteliteEvents, GiSatteliteSlots> {
}
export {};
