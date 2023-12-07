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
export type FaMountainProps = typeof __propDef.props;
export type FaMountainEvents = typeof __propDef.events;
export type FaMountainSlots = typeof __propDef.slots;
export default class FaMountain extends SvelteComponentTyped<FaMountainProps, FaMountainEvents, FaMountainSlots> {
}
export {};
