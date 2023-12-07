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
export type FaRegFrownProps = typeof __propDef.props;
export type FaRegFrownEvents = typeof __propDef.events;
export type FaRegFrownSlots = typeof __propDef.slots;
export default class FaRegFrown extends SvelteComponentTyped<FaRegFrownProps, FaRegFrownEvents, FaRegFrownSlots> {
}
export {};
