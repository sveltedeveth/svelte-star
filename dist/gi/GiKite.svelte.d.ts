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
export type GiKiteProps = typeof __propDef.props;
export type GiKiteEvents = typeof __propDef.events;
export type GiKiteSlots = typeof __propDef.slots;
export default class GiKite extends SvelteComponentTyped<GiKiteProps, GiKiteEvents, GiKiteSlots> {
}
export {};
