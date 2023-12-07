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
export type DiFirefoxProps = typeof __propDef.props;
export type DiFirefoxEvents = typeof __propDef.events;
export type DiFirefoxSlots = typeof __propDef.slots;
export default class DiFirefox extends SvelteComponentTyped<DiFirefoxProps, DiFirefoxEvents, DiFirefoxSlots> {
}
export {};
