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
export type GiTensionSnowflakeProps = typeof __propDef.props;
export type GiTensionSnowflakeEvents = typeof __propDef.events;
export type GiTensionSnowflakeSlots = typeof __propDef.slots;
export default class GiTensionSnowflake extends SvelteComponentTyped<GiTensionSnowflakeProps, GiTensionSnowflakeEvents, GiTensionSnowflakeSlots> {
}
export {};
