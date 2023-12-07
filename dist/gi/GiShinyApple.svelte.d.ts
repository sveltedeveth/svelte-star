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
export type GiShinyAppleProps = typeof __propDef.props;
export type GiShinyAppleEvents = typeof __propDef.events;
export type GiShinyAppleSlots = typeof __propDef.slots;
export default class GiShinyApple extends SvelteComponentTyped<GiShinyAppleProps, GiShinyAppleEvents, GiShinyAppleSlots> {
}
export {};
