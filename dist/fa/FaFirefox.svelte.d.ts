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
export type FaFirefoxProps = typeof __propDef.props;
export type FaFirefoxEvents = typeof __propDef.events;
export type FaFirefoxSlots = typeof __propDef.slots;
export default class FaFirefox extends SvelteComponentTyped<FaFirefoxProps, FaFirefoxEvents, FaFirefoxSlots> {
}
export {};
