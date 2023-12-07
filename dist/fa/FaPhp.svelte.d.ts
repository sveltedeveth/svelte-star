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
export type FaPhpProps = typeof __propDef.props;
export type FaPhpEvents = typeof __propDef.events;
export type FaPhpSlots = typeof __propDef.slots;
export default class FaPhp extends SvelteComponentTyped<FaPhpProps, FaPhpEvents, FaPhpSlots> {
}
export {};
