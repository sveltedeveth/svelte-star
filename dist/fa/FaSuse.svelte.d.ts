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
export type FaSuseProps = typeof __propDef.props;
export type FaSuseEvents = typeof __propDef.events;
export type FaSuseSlots = typeof __propDef.slots;
export default class FaSuse extends SvelteComponentTyped<FaSuseProps, FaSuseEvents, FaSuseSlots> {
}
export {};
