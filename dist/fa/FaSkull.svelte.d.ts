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
export type FaSkullProps = typeof __propDef.props;
export type FaSkullEvents = typeof __propDef.events;
export type FaSkullSlots = typeof __propDef.slots;
export default class FaSkull extends SvelteComponentTyped<FaSkullProps, FaSkullEvents, FaSkullSlots> {
}
export {};
