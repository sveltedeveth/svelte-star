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
export type GoPlusSmallProps = typeof __propDef.props;
export type GoPlusSmallEvents = typeof __propDef.events;
export type GoPlusSmallSlots = typeof __propDef.slots;
export default class GoPlusSmall extends SvelteComponentTyped<GoPlusSmallProps, GoPlusSmallEvents, GoPlusSmallSlots> {
}
export {};
