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
export type GiSinkingTrapProps = typeof __propDef.props;
export type GiSinkingTrapEvents = typeof __propDef.events;
export type GiSinkingTrapSlots = typeof __propDef.slots;
export default class GiSinkingTrap extends SvelteComponentTyped<GiSinkingTrapProps, GiSinkingTrapEvents, GiSinkingTrapSlots> {
}
export {};
