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
export type TiArrowBackProps = typeof __propDef.props;
export type TiArrowBackEvents = typeof __propDef.events;
export type TiArrowBackSlots = typeof __propDef.slots;
export default class TiArrowBack extends SvelteComponentTyped<TiArrowBackProps, TiArrowBackEvents, TiArrowBackSlots> {
}
export {};
