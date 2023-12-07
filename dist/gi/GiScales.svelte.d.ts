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
export type GiScalesProps = typeof __propDef.props;
export type GiScalesEvents = typeof __propDef.events;
export type GiScalesSlots = typeof __propDef.slots;
export default class GiScales extends SvelteComponentTyped<GiScalesProps, GiScalesEvents, GiScalesSlots> {
}
export {};
