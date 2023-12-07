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
export type FaPennyArcadeProps = typeof __propDef.props;
export type FaPennyArcadeEvents = typeof __propDef.events;
export type FaPennyArcadeSlots = typeof __propDef.slots;
export default class FaPennyArcade extends SvelteComponentTyped<FaPennyArcadeProps, FaPennyArcadeEvents, FaPennyArcadeSlots> {
}
export {};
