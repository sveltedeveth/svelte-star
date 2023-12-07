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
export type GiFireflakeProps = typeof __propDef.props;
export type GiFireflakeEvents = typeof __propDef.events;
export type GiFireflakeSlots = typeof __propDef.slots;
export default class GiFireflake extends SvelteComponentTyped<GiFireflakeProps, GiFireflakeEvents, GiFireflakeSlots> {
}
export {};
