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
export type FaTwitterProps = typeof __propDef.props;
export type FaTwitterEvents = typeof __propDef.events;
export type FaTwitterSlots = typeof __propDef.slots;
export default class FaTwitter extends SvelteComponentTyped<FaTwitterProps, FaTwitterEvents, FaTwitterSlots> {
}
export {};
