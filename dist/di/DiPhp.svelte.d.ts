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
export type DiPhpProps = typeof __propDef.props;
export type DiPhpEvents = typeof __propDef.events;
export type DiPhpSlots = typeof __propDef.slots;
export default class DiPhp extends SvelteComponentTyped<DiPhpProps, DiPhpEvents, DiPhpSlots> {
}
export {};
