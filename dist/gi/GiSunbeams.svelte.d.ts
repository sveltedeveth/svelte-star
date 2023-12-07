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
export type GiSunbeamsProps = typeof __propDef.props;
export type GiSunbeamsEvents = typeof __propDef.events;
export type GiSunbeamsSlots = typeof __propDef.slots;
export default class GiSunbeams extends SvelteComponentTyped<GiSunbeamsProps, GiSunbeamsEvents, GiSunbeamsSlots> {
}
export {};
