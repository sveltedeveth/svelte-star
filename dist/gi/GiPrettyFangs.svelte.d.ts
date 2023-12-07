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
export type GiPrettyFangsProps = typeof __propDef.props;
export type GiPrettyFangsEvents = typeof __propDef.events;
export type GiPrettyFangsSlots = typeof __propDef.slots;
export default class GiPrettyFangs extends SvelteComponentTyped<GiPrettyFangsProps, GiPrettyFangsEvents, GiPrettyFangsSlots> {
}
export {};
