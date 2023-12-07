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
export type FaCapsulesProps = typeof __propDef.props;
export type FaCapsulesEvents = typeof __propDef.events;
export type FaCapsulesSlots = typeof __propDef.slots;
export default class FaCapsules extends SvelteComponentTyped<FaCapsulesProps, FaCapsulesEvents, FaCapsulesSlots> {
}
export {};
