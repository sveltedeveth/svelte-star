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
export type FaViadeoProps = typeof __propDef.props;
export type FaViadeoEvents = typeof __propDef.events;
export type FaViadeoSlots = typeof __propDef.slots;
export default class FaViadeo extends SvelteComponentTyped<FaViadeoProps, FaViadeoEvents, FaViadeoSlots> {
}
export {};
