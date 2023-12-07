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
export type GiGiftTrapProps = typeof __propDef.props;
export type GiGiftTrapEvents = typeof __propDef.events;
export type GiGiftTrapSlots = typeof __propDef.slots;
export default class GiGiftTrap extends SvelteComponentTyped<GiGiftTrapProps, GiGiftTrapEvents, GiGiftTrapSlots> {
}
export {};
