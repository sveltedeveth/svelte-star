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
export type FaCrownProps = typeof __propDef.props;
export type FaCrownEvents = typeof __propDef.events;
export type FaCrownSlots = typeof __propDef.slots;
export default class FaCrown extends SvelteComponentTyped<FaCrownProps, FaCrownEvents, FaCrownSlots> {
}
export {};
