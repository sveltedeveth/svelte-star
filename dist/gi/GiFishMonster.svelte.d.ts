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
export type GiFishMonsterProps = typeof __propDef.props;
export type GiFishMonsterEvents = typeof __propDef.events;
export type GiFishMonsterSlots = typeof __propDef.slots;
export default class GiFishMonster extends SvelteComponentTyped<GiFishMonsterProps, GiFishMonsterEvents, GiFishMonsterSlots> {
}
export {};
