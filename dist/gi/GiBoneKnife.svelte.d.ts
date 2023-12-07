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
export type GiBoneKnifeProps = typeof __propDef.props;
export type GiBoneKnifeEvents = typeof __propDef.events;
export type GiBoneKnifeSlots = typeof __propDef.slots;
export default class GiBoneKnife extends SvelteComponentTyped<GiBoneKnifeProps, GiBoneKnifeEvents, GiBoneKnifeSlots> {
}
export {};
