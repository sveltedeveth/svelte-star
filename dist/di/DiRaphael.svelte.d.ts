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
export type DiRaphaelProps = typeof __propDef.props;
export type DiRaphaelEvents = typeof __propDef.events;
export type DiRaphaelSlots = typeof __propDef.slots;
export default class DiRaphael extends SvelteComponentTyped<DiRaphaelProps, DiRaphaelEvents, DiRaphaelSlots> {
}
export {};
