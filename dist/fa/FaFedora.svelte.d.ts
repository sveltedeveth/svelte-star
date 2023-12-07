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
export type FaFedoraProps = typeof __propDef.props;
export type FaFedoraEvents = typeof __propDef.events;
export type FaFedoraSlots = typeof __propDef.slots;
export default class FaFedora extends SvelteComponentTyped<FaFedoraProps, FaFedoraEvents, FaFedoraSlots> {
}
export {};
