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
export type DiNancyProps = typeof __propDef.props;
export type DiNancyEvents = typeof __propDef.events;
export type DiNancySlots = typeof __propDef.slots;
export default class DiNancy extends SvelteComponentTyped<DiNancyProps, DiNancyEvents, DiNancySlots> {
}
export {};
