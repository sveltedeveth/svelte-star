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
export type DiGroovyProps = typeof __propDef.props;
export type DiGroovyEvents = typeof __propDef.events;
export type DiGroovySlots = typeof __propDef.slots;
export default class DiGroovy extends SvelteComponentTyped<DiGroovyProps, DiGroovyEvents, DiGroovySlots> {
}
export {};
