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
export type DiNpmProps = typeof __propDef.props;
export type DiNpmEvents = typeof __propDef.events;
export type DiNpmSlots = typeof __propDef.slots;
export default class DiNpm extends SvelteComponentTyped<DiNpmProps, DiNpmEvents, DiNpmSlots> {
}
export {};
