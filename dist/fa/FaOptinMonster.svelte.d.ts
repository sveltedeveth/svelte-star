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
export type FaOptinMonsterProps = typeof __propDef.props;
export type FaOptinMonsterEvents = typeof __propDef.events;
export type FaOptinMonsterSlots = typeof __propDef.slots;
export default class FaOptinMonster extends SvelteComponentTyped<FaOptinMonsterProps, FaOptinMonsterEvents, FaOptinMonsterSlots> {
}
export {};
