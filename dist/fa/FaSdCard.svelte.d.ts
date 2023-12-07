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
export type FaSdCardProps = typeof __propDef.props;
export type FaSdCardEvents = typeof __propDef.events;
export type FaSdCardSlots = typeof __propDef.slots;
export default class FaSdCard extends SvelteComponentTyped<FaSdCardProps, FaSdCardEvents, FaSdCardSlots> {
}
export {};
