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
export type GiThrownKnifeProps = typeof __propDef.props;
export type GiThrownKnifeEvents = typeof __propDef.events;
export type GiThrownKnifeSlots = typeof __propDef.slots;
export default class GiThrownKnife extends SvelteComponentTyped<GiThrownKnifeProps, GiThrownKnifeEvents, GiThrownKnifeSlots> {
}
export {};
