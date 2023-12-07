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
export type FaFrownProps = typeof __propDef.props;
export type FaFrownEvents = typeof __propDef.events;
export type FaFrownSlots = typeof __propDef.slots;
export default class FaFrown extends SvelteComponentTyped<FaFrownProps, FaFrownEvents, FaFrownSlots> {
}
export {};
