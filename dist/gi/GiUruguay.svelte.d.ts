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
export type GiUruguayProps = typeof __propDef.props;
export type GiUruguayEvents = typeof __propDef.events;
export type GiUruguaySlots = typeof __propDef.slots;
export default class GiUruguay extends SvelteComponentTyped<GiUruguayProps, GiUruguayEvents, GiUruguaySlots> {
}
export {};
