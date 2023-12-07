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
export type GiHoneypotProps = typeof __propDef.props;
export type GiHoneypotEvents = typeof __propDef.events;
export type GiHoneypotSlots = typeof __propDef.slots;
export default class GiHoneypot extends SvelteComponentTyped<GiHoneypotProps, GiHoneypotEvents, GiHoneypotSlots> {
}
export {};
