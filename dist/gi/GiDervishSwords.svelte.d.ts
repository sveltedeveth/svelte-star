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
export type GiDervishSwordsProps = typeof __propDef.props;
export type GiDervishSwordsEvents = typeof __propDef.events;
export type GiDervishSwordsSlots = typeof __propDef.slots;
export default class GiDervishSwords extends SvelteComponentTyped<GiDervishSwordsProps, GiDervishSwordsEvents, GiDervishSwordsSlots> {
}
export {};
