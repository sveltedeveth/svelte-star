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
export type FaSnowflakeProps = typeof __propDef.props;
export type FaSnowflakeEvents = typeof __propDef.events;
export type FaSnowflakeSlots = typeof __propDef.slots;
export default class FaSnowflake extends SvelteComponentTyped<FaSnowflakeProps, FaSnowflakeEvents, FaSnowflakeSlots> {
}
export {};
