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
export type DiSymfonyProps = typeof __propDef.props;
export type DiSymfonyEvents = typeof __propDef.events;
export type DiSymfonySlots = typeof __propDef.slots;
export default class DiSymfony extends SvelteComponentTyped<DiSymfonyProps, DiSymfonyEvents, DiSymfonySlots> {
}
export {};
