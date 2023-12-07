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
export type GiGolfFlagProps = typeof __propDef.props;
export type GiGolfFlagEvents = typeof __propDef.events;
export type GiGolfFlagSlots = typeof __propDef.slots;
export default class GiGolfFlag extends SvelteComponentTyped<GiGolfFlagProps, GiGolfFlagEvents, GiGolfFlagSlots> {
}
export {};
