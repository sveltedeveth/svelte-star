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
export type IoMdSubwayProps = typeof __propDef.props;
export type IoMdSubwayEvents = typeof __propDef.events;
export type IoMdSubwaySlots = typeof __propDef.slots;
export default class IoMdSubway extends SvelteComponentTyped<IoMdSubwayProps, IoMdSubwayEvents, IoMdSubwaySlots> {
}
export {};
