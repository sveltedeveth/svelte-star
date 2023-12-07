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
export type FaInfoProps = typeof __propDef.props;
export type FaInfoEvents = typeof __propDef.events;
export type FaInfoSlots = typeof __propDef.slots;
export default class FaInfo extends SvelteComponentTyped<FaInfoProps, FaInfoEvents, FaInfoSlots> {
}
export {};
