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
export type GiFedoraProps = typeof __propDef.props;
export type GiFedoraEvents = typeof __propDef.events;
export type GiFedoraSlots = typeof __propDef.slots;
export default class GiFedora extends SvelteComponentTyped<GiFedoraProps, GiFedoraEvents, GiFedoraSlots> {
}
export {};
