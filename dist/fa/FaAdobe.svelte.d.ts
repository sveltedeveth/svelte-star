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
export type FaAdobeProps = typeof __propDef.props;
export type FaAdobeEvents = typeof __propDef.events;
export type FaAdobeSlots = typeof __propDef.slots;
export default class FaAdobe extends SvelteComponentTyped<FaAdobeProps, FaAdobeEvents, FaAdobeSlots> {
}
export {};
