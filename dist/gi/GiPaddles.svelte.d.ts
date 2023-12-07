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
export type GiPaddlesProps = typeof __propDef.props;
export type GiPaddlesEvents = typeof __propDef.events;
export type GiPaddlesSlots = typeof __propDef.slots;
export default class GiPaddles extends SvelteComponentTyped<GiPaddlesProps, GiPaddlesEvents, GiPaddlesSlots> {
}
export {};
