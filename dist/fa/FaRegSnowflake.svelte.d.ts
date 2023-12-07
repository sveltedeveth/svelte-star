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
export type FaRegSnowflakeProps = typeof __propDef.props;
export type FaRegSnowflakeEvents = typeof __propDef.events;
export type FaRegSnowflakeSlots = typeof __propDef.slots;
export default class FaRegSnowflake extends SvelteComponentTyped<FaRegSnowflakeProps, FaRegSnowflakeEvents, FaRegSnowflakeSlots> {
}
export {};
