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
export type WiSnowflakeColdProps = typeof __propDef.props;
export type WiSnowflakeColdEvents = typeof __propDef.events;
export type WiSnowflakeColdSlots = typeof __propDef.slots;
export default class WiSnowflakeCold extends SvelteComponentTyped<WiSnowflakeColdProps, WiSnowflakeColdEvents, WiSnowflakeColdSlots> {
}
export {};
