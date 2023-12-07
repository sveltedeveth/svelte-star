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
export type FaPaintRollerProps = typeof __propDef.props;
export type FaPaintRollerEvents = typeof __propDef.events;
export type FaPaintRollerSlots = typeof __propDef.slots;
export default class FaPaintRoller extends SvelteComponentTyped<FaPaintRollerProps, FaPaintRollerEvents, FaPaintRollerSlots> {
}
export {};
