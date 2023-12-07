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
export type GiFangsProps = typeof __propDef.props;
export type GiFangsEvents = typeof __propDef.events;
export type GiFangsSlots = typeof __propDef.slots;
export default class GiFangs extends SvelteComponentTyped<GiFangsProps, GiFangsEvents, GiFangsSlots> {
}
export {};
